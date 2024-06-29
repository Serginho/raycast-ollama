import { getPreferenceValues } from "@raycast/api";
import { Creativity } from "./lib/enum";
import { CommandAnswer } from "./lib/settings/enum";
import { Preferences } from "./lib/types";
import { AnswerView } from "./lib/ui/AnswerView/main";

const pref = getPreferenceValues<Preferences>();
if (!pref.ollamaCertificateValidation) process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

export default function Command(): JSX.Element {
  const c = CommandAnswer.EXPLAIN;
  const p = `Actúa como un diccionario y enciclopedia, proporcionando explicaciones claras y concisas para palabras o conceptos dados.

Sigue estrictamente estas reglas:

- Explica el texto en un lenguaje simple y conciso
- Para una sola palabra, proporciona una definición breve y fácil de entender
- Para un concepto o frase, da una explicación concisa que descomponga las ideas principales en términos simples
- Utiliza ejemplos o analogías para aclarar temas complejos cuando sea necesario
- Responde solo con la explicación o definición
- Algunos ejemplos:
Texto: Filosofía
Explicación: La filosofía es el estudio de la naturaleza fundamental del conocimiento, la realidad y la existencia. Es un sistema de ideas que intenta explicar el mundo y nuestro lugar en él. Los filósofos utilizan la lógica y la razón para explorar el significado de la vida y el universo.

Texto: {selection}

Explicación:`;
  return <AnswerView command={c} prompt={p} creativity={Creativity.Low} />;
}
