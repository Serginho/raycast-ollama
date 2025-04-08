import { getPreferenceValues } from "@raycast/api";
import { Creativity } from "./lib/enum";
import { CommandAnswer } from "./lib/settings/enum";
import { Preferences, RaycastArgumentsOllamaCommandTalkResponse } from "./lib/types";
import { AnswerView } from "./lib/ui/AnswerView/main";

const pref = getPreferenceValues<Preferences>();
if (!pref.ollamaCertificateValidation) process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

export default function Command(props: RaycastArgumentsOllamaCommandTalkResponse): JSX.Element {
  const c = CommandAnswer.PROFESSIONAL;
  return <AnswerView command={c} prompt={props.arguments.input} creativity={Creativity.Low} />;
}
