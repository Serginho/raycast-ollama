import { getPreferenceValues, LaunchProps } from "@raycast/api";
import { Creativity } from "./lib/enum";
import { OllamaApiModelCapability } from "./lib/ollama/enum";
import { CommandAnswer } from "./lib/settings/enum";
import { AnswerView } from "./lib/ui/AnswerView/main";

const pref = getPreferenceValues<Preferences>();
if (!pref.ollamaCertificateValidation) process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

export default function Command(props: LaunchProps<{ arguments: Arguments.OllamaQuery }>): React.JSX.Element {
  const c = CommandAnswer.EXPLAIN;
  const p = `Responde a la siguiente consulta: ${props.arguments.input}
    La información a analizar es la siguiente:
    {selection}
  `;
  return (
    <AnswerView
      command={c}
      prompt={p}
      creativity={Creativity.Low}
      capabilities={[OllamaApiModelCapability.COMPLETION]}
    />
  );
}
