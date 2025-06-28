import { ThoughtCard } from "~/components/About";
import { Icon } from "~/enums/icons";

export default function AboutPage() {
  return (
    <main class="container mx-auto py-12 flex flex-col gap-8">
      <ThoughtCard icon={Icon.bulb}>
        <>
          - I’m a creative soul who loves dreaming up new ideas. I’m passionate
          about <strong class="text-primary">art</strong>,{" "}
          <strong class="text-primary">problem-solving</strong>, and{" "}
          <strong class="text-primary">puzzles</strong>, which is why I fell in
          love with programming.
          <tr />- I also adore <strong class="text-primary">RPGs</strong>—I get
          lost in rich worlds, intricate challenges, crafting unique stories
          and, of course, unique system, mechanics, combos... discovering and
          learning new things is always fun!
          <tr />- As said above, I'm always looking for new things to learn:{" "}
          <strong class="text-primary">new</strong> frameworks,{" "}
          <strong class="text-primary">new</strong> programming languages,{" "}
          <strong class="text-primary">new</strong> RPG systems... it feels like
          I never get tired of experiencing new things (and that's some of the
          things that I love about having{" "}
          <strong class="text-primary">ADHD</strong>).
        </>
      </ThoughtCard>

      <ThoughtCard icon={Icon.code} right>
        <>
          - There’s something magical about turning ideas into reality with
          code. That, summed up with my will to understand and learn, drove me
          to become a <strong class="text-primary">Fullstack Developer</strong>.
          Bringing my 1917 projects to life? Just writing about it gets me
          excited!
        </>
      </ThoughtCard>

      <ThoughtCard icon={Icon.chalkboard}>
        <>
          - I believe that <strong class="text-primary">knowledge</strong> is
          power, so I’m always learning something new.
          <tr />- Even better, I love sharing what I know—seeing that “aha!”
          moment in someone’s eyes and feeling that we're truly understanding
          each other is incredibly rewarding.
        </>
      </ThoughtCard>

      <ThoughtCard icon={Icon.puzzle} right>
        <>
          - For me, every <strong class="text-primary">challenge</strong> is an
          opportunity to grow, create something amazing, and maybe even inspire
          someone along the way.
          <tr />- Life is a puzzle, and I’m here to solve it—one piece at a
          time.
        </>
      </ThoughtCard>
    </main>
  );
}
