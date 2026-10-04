import { getPreferenceValues } from "@raycast/api";
import { Creativity } from "./lib/enum";
import { OllamaApiModelCapability } from "./lib/ollama/enum";
import { CommandAnswer } from "./lib/settings/enum";
import { AnswerView } from "./lib/ui/AnswerView/main";

const pref = getPreferenceValues<Preferences.OllamaTranslateEn>();
if (!pref.ollamaCertificateValidation) process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

export default function Command(): React.JSX.Element {
  const c = CommandAnswer.TRANSLATE;
  const p = `Traduce el texto al Inglés

Texto: {selection}

Traducción:`;
  return (
    <AnswerView
      command={c}
      prompt={p}
      creativity={Creativity.Low}
      capabilities={[OllamaApiModelCapability.COMPLETION]}
      autoReplace={pref.ollamaAutoReplace}
    />
  );
}
