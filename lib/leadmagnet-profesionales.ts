/**
 * Lead Magnet: 10 Prompts Efectivos para Profesionales
 * Contenido del PDF descargable
 */

export const leadMagnetContent = {
  title: "10 Prompts Efectivos para Profesionales",
  subtitle: "Multiplica tu productividad como Gerente, Director o Ejecutivo",
  introduction: `La mayoría usa ChatGPT pero no sabe cómo. Estos 10 prompts son específicos para tu rol.
    Cópialos, úsalos, ve los resultados en tu próxima reunión.`,

  sections: [
    {
      title: "Presentaciones Ejecutivas",
      prompts: [
        {
          name: "Estructura de Presentación Ganadora",
          prompt: `Necesito una estructura para presentar [TEMA] a [AUDIENCIA].
            Objetivos: [OBJETIVO 1, OBJETIVO 2].
            Duración: [X minutos].
            Crea una estructura que me garantice que capte atención en los primeros 30 segundos.`,
        },
        {
          name: "Slide de Datos Complejos",
          prompt: `Tengo estos datos: [DATOS].
            Necesito una forma visual y comprensible de mostrarlos en una slide.
            El mensaje clave es: [MENSAJE].
            Crea una propuesta de layout y contenido.`,
        },
      ],
    },
    {
      title: "Reportes Estratégicos",
      prompts: [
        {
          name: "Resumen Ejecutivo",
          prompt: `Resume este documento en un resumen ejecutivo de 2 párrafos:
            [PEGAR DOCUMENTO].
            Incluye: problema, impacto, recomendación.`,
        },
        {
          name: "Análisis de Riesgos",
          prompt: `Analiza estos riesgos de mi plan estratégico: [PLAN].
            Para cada riesgo: identifica, impacto probable, y mitigation.
            Formato: tabla simple para ejecutivos.`,
        },
      ],
    },
    {
      title: "Comunicación Efectiva",
      prompts: [
        {
          name: "Email de Cambio Organizacional",
          prompt: `Necesito comunicar este cambio organizacional a mi equipo: [CAMBIO].
            Debe: explicar por qué, qué cambia, cómo afecta a cada uno.
            Tono: honesto pero motivador.`,
        },
        {
          name: "Feedback Difícil",
          prompt: `Necesito dar feedback difícil a [PERSONA] sobre [SITUACIÓN].
            Resultados esperados: [QUÉ ESPERAS QUE CAMBIE].
            Escribe email que sea honesto pero no ofenda.`,
        },
      ],
    },
    {
      title: "Análisis de Datos",
      prompts: [
        {
          name: "Insights de Números",
          prompt: `Analiza estos números y dame 3 insights accionables:
            [DATOS NUMÉRICOS].
            Para cada insight: qué significa, por qué importa, qué hacer.`,
        },
        {
          name: "Predicción de Tendencias",
          prompt: `Basado en estos datos históricos: [DATOS].
            Predice la tendencia para los próximos [PERÍODO].
            Incluye: escenario optimista, realista, pesimista.`,
        },
      ],
    },
  ],

  closing: `Estos prompts funcionan porque son específicos. La IA necesita contexto.
    Entre más contexto des, mejor resultado.

    ¿Quieres entrenar más a fondo en IA para tu rol?
    Nuestro curso de 30 días te enseña exactamente cómo implementar esto en tu día a día.`,
};
