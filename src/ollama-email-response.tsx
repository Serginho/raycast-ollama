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
    Detalles sobre la respuesta: ${props.arguments.responseDetails}

    Email:
    {selection}
  `;
  return <AnswerView command={c} prompt={p} creativity={Creativity.Low} />;
}
