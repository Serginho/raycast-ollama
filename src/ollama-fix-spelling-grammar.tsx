import { getPreferenceValues } from "@raycast/api";
import { Creativity } from "./lib/enum";
import { CommandAnswer } from "./lib/settings/enum";
import { Preferences } from "./lib/types";
import { AnswerView } from "./lib/ui/AnswerView/main";

const pref = getPreferenceValues<Preferences>();
if (!pref.ollamaCertificateValidation) process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

export default function Command(): JSX.Element {
  const c = CommandAnswer.FIX;
  const p = `Actúa como un corrector y mejorador de ortografía.

Sigue estrictamente estas reglas:

- Corrige la ortografía, gramática y puntuación
- Mantén el idioma original
- NUNCA rodees el texto corregido con comillas
- Mantén las URLs
- No cambies los emojis
Texto: {selección}

Texto Corregido:`;
  return <AnswerView command={c} prompt={p} creativity={Creativity.Low} />;
}
