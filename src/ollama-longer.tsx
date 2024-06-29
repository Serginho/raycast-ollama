import { getPreferenceValues } from "@raycast/api";
import { Creativity } from "./lib/enum";
import { CommandAnswer } from "./lib/settings/enum";
import { Preferences } from "./lib/types";
import { AnswerView } from "./lib/ui/AnswerView/main";

const pref = getPreferenceValues<Preferences>();
if (!pref.ollamaCertificateValidation) process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

export default function Command(): JSX.Element {
  const c = CommandAnswer.LONGER;
  const p = `Actúa como un redactor de contenido profesional encargado de expandir el texto de un cliente manteniendo su esencia y estilo.

Sigue estrictamente estas reglas:

- SIEMPRE preserva el tono, la voz y el lenguaje original del texto.
- Identifica y expande la información más crítica y los puntos clave.
- Evita la repetición.
- Mantente lo más cerca posible de los hechos proporcionados en el texto.
- Mantén las URLs en su formato original sin reemplazarlas por enlaces en markdown.
- Solo responde con el texto expandido.

Texto: {selección}

Texto expandido:`;
  return <AnswerView command={c} prompt={p} creativity={Creativity.Low} />;
}
