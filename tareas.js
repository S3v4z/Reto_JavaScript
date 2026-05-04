// ─── 1. Arreglo de tareas ───────────────────────────────────────────────────
const tareas = [
{ descripcion: "Enviar correo de bienvenida", tipo: "simple" },
{ descripcion: "Revisar informe financiero", tipo: "importante" },
{ descripcion: "Desplegar servidor en producción", tipo: "critica" },
{ descripcion: "Actualizar dependencias del proyecto", tipo: "simple" },
{ descripcion: "Notificar al equipo de seguridad", tipo: "importante" },
];

// ─── 2. Duración según tipo ─────────────────────────────────────────────────
const duraciones = {
  simple: 1000,
  importante: 2000,
  critica: 3000,
};

// ─── 3. Función ejecutarTarea ───────────────────────────────────────────────
function ejecutarTarea(tarea, callback) {
  const tiempo = duraciones[tarea.tipo];

  if (tiempo === undefined) {
    console.error(`Tipo desconocido: "${tarea.tipo}" → tarea omitida.`);
    callback(); // seguimos contando para no bloquear registroFinal
    return;
  }

  setTimeout(() => {
    console.log(`✅ Tarea completada: ${tarea.descripcion} (${tarea.tipo} — ${tiempo / 1000}s)`);
    callback();
  }, tiempo);
}

// ─── 4. registroFinal ───────────────────────────────────────────────────────
function registroFinal() {
  console.log("\n🎉 Todas las tareas han sido registradas exitosamente.");
}

// ─── 5. Bucle con contador para esperar TODAS las tareas ────────────────────
console.log("🚀 Iniciando ejecución de tareas...\n");

let completadas = 0;

tareas.forEach((tarea) => {
  ejecutarTarea(tarea, () => {
    completadas++;
    if (completadas === tareas.length) {
      registroFinal();
    }
  });
});
