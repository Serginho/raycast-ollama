import { getPreferenceValues } from "@raycast/api";
import { Creativity } from "./lib/enum";
import { CommandAnswer } from "./lib/settings/enum";
import { Preferences } from "./lib/types";
import { AnswerView } from "./lib/ui/AnswerView/main";

const pref = getPreferenceValues<Preferences>();
if (!pref.ollamaCertificateValidation) process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

export default function Command(): JSX.Element {
  const c = CommandAnswer.SHORTER;
  const p = `Haz un resumen del siguiente texto en Español, utiliza como máximo 50 palabras.
Texto: {selection}

Resumen del texto:`;
  return <AnswerView command={c} prompt={p} creativity={Creativity.Low} />;
}
