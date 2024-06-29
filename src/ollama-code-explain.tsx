import { getPreferenceValues } from "@raycast/api";
import { Creativity } from "./lib/enum";
import { CommandAnswer } from "./lib/settings/enum";
import { Preferences } from "./lib/types";
import { AnswerView } from "./lib/ui/AnswerView/main";

const pref = getPreferenceValues<Preferences>();
if (!pref.ollamaCertificateValidation) process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

export default function Command(): JSX.Element {
  const c = CommandAnswer.CODE_EXPLAIN;
  const p = `Actúa como un ingeniero de software con un profundo conocimiento de cualquier lenguaje de programación y su documentación. Explica en Español cómo funciona el código paso a paso en una lista. Sé conciso, con un tono casual, y escríbelo como documentación para otros.`;
  return <AnswerView command={c} prompt={p} creativity={Creativity.Medium} />;
}
