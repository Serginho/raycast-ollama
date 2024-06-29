import { AnswerView } from "./lib/ui/AnswerView/main";
import { Preferences } from "./lib/types";
import { CommandAnswer } from "./lib/settings/enum";
import { getPreferenceValues } from "@raycast/api";
import { Creativity } from "./lib/enum";

const pref = getPreferenceValues<Preferences>();
if (!pref.ollamaCertificateValidation) process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

export default function Command(): JSX.Element {
  const c = CommandAnswer.TRANSLATE;
  const p = `Traduce el texto al Español 

Texto: {selection}

Traducción:`;
  return <AnswerView command={c} prompt={p} creativity={Creativity.Low} />;
}
