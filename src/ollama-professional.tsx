import { getPreferenceValues } from "@raycast/api";
import { Creativity } from "./lib/enum";
import { OllamaApiModelCapability } from "./lib/ollama/enum";
import { CommandAnswer } from "./lib/settings/enum";
import { AnswerView } from "./lib/ui/AnswerView/main";

const pref = getPreferenceValues<Preferences.OllamaProfessional>();
if (!pref.ollamaCertificateValidation) process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

export default function Command(): React.JSX.Element {
  const c = CommandAnswer.PROFESSIONAL;
  const p = `Actúa como un redactor y editor de contenido profesional.

Sigue estrictamente estas reglas:

- Tono profesional
- Lenguaje formal
- Hechos precisos
- Ortografía, gramática y puntuación correctas
- Redacción concisa
- Significado inalterado
- Longitud mantenida
- Mantén las URLs
- Mantén el idioma original
Texto: {selection}

Texto reescrito:`;
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
