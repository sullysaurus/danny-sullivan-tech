import { JSX, Show, createSignal } from "solid-js";

type Props = {
  children: JSX.Element;
};

function Tooltip(props: Props) {
  const [isVisible, setIsVisible] = createSignal(false);
  const [clickCount, setClickCount] = createSignal(0);

  const messages = [
    "Welcome to the start of something new!",
    "Every click is a step forward.",
    "Your persistence is the key to discovery.",
    "The journey of learning never gets old.",
    "Curiosity leads to the greatest discoveries.",
    "Embrace your quest for knowledge.",
    "Every question is a doorway to understanding.",
    "Challenges make us stronger.",
    "Take a moment to reflect, then press on.",
    "Obstacles are just opportunities in disguise.",
    "Your determination is inspiring.",
    "Limitations exist only to be overcome.",
    "The path of persistence will lead you to success.",
    "Even small steps can lead to great journeys.",
    "Your resolve is your greatest asset.",
    "Seeking answers is the essence of growth.",
    "Fatigue is just a sign of your efforts.",
    "Let your curiosity be your guide.",
    "There's always more to learn and explore.",
    "Pursue your passions relentlessly.",
    "A moment of rest is part of the journey.",
    "Each attempt brings you closer to your goal.",
    "You've come far, but the best is yet to come.",
    "Thank you for your perseverance. Keep going!",
  ];
  

  const currentMessage = () => {
    const count = clickCount();
    if (count >= messages.length) {
      return messages[messages.length - 1];
    }
    return messages[count];
  };

  return (
    <div class="relative inline-block">
      <div
        onMouseDown={() => {
          setIsVisible(!isVisible());
          if (isVisible()) {
            setClickCount((count) => count + 1);
          }
        }}
        onMouseUp={() => {
          setIsVisible(false);
        }}
        onTouchStart={() => {
          setIsVisible(!isVisible());
          if (isVisible()) {
            setClickCount((count) => count + 1);
          }
        }}
        onTouchEnd={() => {
          setIsVisible(false);
        }}
      >
        {props.children}
      </div>

      <Show when={isVisible()}>
        <div class="absolute left-1/2 -translate-x-1/2 -translate-y-24 mt-1 w-auto max-h-[70px] p-2 bg-black text-white text-center rounded-lg z-10 shadow-custom border border-primary-500 whitespace-normal after:content-[''] after:block after:rotate-45 after:w-4 after:h-4 after:shadow-custom after:absolute after:-bottom-2 after:-translate-x-1/2 after:left-1/2 after:bg-black after:z-20">
          <p class="w-max">{currentMessage()}</p>
        </div>
      </Show>
    </div>
  );
}

export default Tooltip;
