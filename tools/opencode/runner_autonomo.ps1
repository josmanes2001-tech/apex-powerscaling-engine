param(
    [string]$Prompt = "",
    [int]$MaxIteraciones = 10,
    [string]$AgentePrimario = "build",
    [string]$AgenteAuditor = "reasoner_omni"
)

# 1. Deteccion automatica de entorno (Mini PC vs Este PC)
$ApexPath = if (Test-Path "D:\Vault Obsidian\apex-powerscaling-engine") {
    "D:\Vault Obsidian\apex-powerscaling-engine"
} elseif (Test-Path "Z:\apex-powerscaling-engine") {
    "Z:\apex-powerscaling-engine"
} else {
    "C:\Users\Jose Luis"
}

$LogFile = "C:\Users\Jose Luis\opencode-tools\logs\ejecucion_autonoma_$(Get-Date -Format 'yyyyMMdd_HHmmss').log"

function Log($msg) {
    $time = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $line = "[$time] $msg"
    Write-Host $line
    Add-Content -Path $LogFile -Value $line -Encoding UTF8
}

Log "==============================================================================="
Log "  INICIANDO EJECUCION AUTONOMA NON-STOP (OPENCODE MULTI-AGENTE)"
Log "==============================================================================="
Log "Entorno de trabajo detectado: $ApexPath"
Log "Agente de Ejecucion: $AgentePrimario"
Log "Agente de Auditoria: $AgenteAuditor"

if ([string]::IsNullOrWhiteSpace($Prompt)) {
    $TareaFile = "C:\Users\Jose Luis\opencode-tools\TAREA_ACTIVA.txt"
    if (Test-Path $TareaFile) {
        $Prompt = Get-Content $TareaFile -Raw
        Log "Cargando tarea desde archivo: $TareaFile"
    } else {
        $Prompt = "Auditar el codigo en $ApexPath, verificar que no haya errores de sintaxis y generar reporte."
    }
}

Log "Mision asignada: $Prompt"

for ($i = 1; $i -le $MaxIteraciones; $i++) {
    Log "-------------------------------------------------------------------------------"
    Log ">>> ITERACION $i de $MaxIteraciones: Ejecutando con $AgentePrimario..."
    Log "-------------------------------------------------------------------------------"
    
    # Ejecutar agente de construccion/edicion
    $cmd = "opencode run --agent $AgentePrimario `"$Prompt (Paso $i de $MaxIteraciones en $ApexPath). Trabaja de forma autonoma y reporta estado.`""
    $res = cmd /c "cd /d `"$ApexPath`" && $cmd" 2>&1
    Add-Content -Path $LogFile -Value $res -Encoding UTF8

    Log ">>> Auditoria de calidad con $AgenteAuditor..."
    $auditCmd = "opencode run --agent $AgenteAuditor `"Revisa el estado de la tarea en $ApexPath. Si todo esta completado con exito responde EXACTAMENTE 'MISION_COMPLETADA'. Si faltan detalles, lista que falta.`""
    $auditRes = cmd /c "cd /d `"$ApexPath`" && $auditCmd" 2>&1
    Add-Content -Path $LogFile -Value $auditRes -Encoding UTF8

    if ($auditRes -match "MISION_COMPLETADA") {
        Log "==============================================================================="
        Log "🎉 ¡MISION COMPLETADA CON EXITO EN LA ITERACION $i!"
        Log "==============================================================================="
        break
    } else {
        Log "Paso $i completado. Faltan detalles segun auditoria. Continuando bucle..."
        Start-Sleep -Seconds 3
    }
}

Log "Fin de sesion autonoma. Log completo guardado en: $LogFile"
