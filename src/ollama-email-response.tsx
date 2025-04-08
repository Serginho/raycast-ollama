import { getPreferenceValues } from "@raycast/api";
import { Creativity } from "./lib/enum";
import { CommandAnswer } from "./lib/settings/enum";
import { Preferences, RaycastArgumentsOllamaCommandEmailResponse } from "./lib/types";
import { AnswerView } from "./lib/ui/AnswerView/main";

const pref = getPreferenceValues<Preferences>();
if (!pref.ollamaCertificateValidation) process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

export default function Command(props: RaycastArgumentsOllamaCommandEmailResponse): JSX.Element {
  const c = CommandAnswer.EMAIL;
  const p = `Responde al siguiente email en Español, siguiendo los siguientes criterios:
    Este el es el email que me ha llegado a mi: 
    {selection}
    
    Responde al email como si fuera yo siguiendo los siguientes criterios: ${props.arguments.responseDetails}
  `;
  return <AnswerView command={c} prompt={p} creativity={Creativity.Low} />;
}
