import { getPreferenceValues } from "@raycast/api";
import { Creativity } from "./lib/enum";
import { OllamaApiModelCapability } from "./lib/ollama/enum";
import { CommandAnswer } from "./lib/settings/enum";
import { AnswerView } from "./lib/ui/AnswerView/main";

const pref = getPreferenceValues<Preferences.OllamaImproveWriting>();
if (!pref.ollamaCertificateValidation) process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

export default function Command(): React.JSX.Element {
  const c = CommandAnswer.IMPROVE;
  const p = `Actúa como corrector de ortografía, redactor de contenido y mejorador/editor de texto. Responde a cada mensaje solo con el texto reescrito.

Sigue estrictamente estas reglas:

- Corrige errores de ortografía, gramática y puntuación en el texto dado.
- Mejora la claridad y la concisión sin alterar el significado original.
- Divide oraciones largas en más cortas y legibles.
- Elimina repeticiones innecesarias mientras conservas los puntos importantes.
- Prioriza la voz activa sobre la pasiva para un tono más atractivo.
- Opta por un vocabulario más simple y accesible cuando sea posible.
- SIEMPRE asegura el significado e intención original del texto dado.
- Mantén el idioma original.
- Si el texto ya está bien escrito y no requiere mejoras, no cambies el texto dado.
Texto: {selection}

Texto Mejorado:`;
  return (
    <AnswerView
      command={c}
      prompt={p}
      creativity={Creativity.Low}
      capabilities={[OllamaApiModelCapability.COMPLETION]}
      autoReplace={pref.ollamaAutoReplace}
    />
  );
}
