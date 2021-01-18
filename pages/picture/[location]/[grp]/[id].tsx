import { useRouter } from "next/router";
import { pictures, picture } from "../../../../lib/picture";
import Close from "../../../../components/images/X";
import Previous from "../../../../components/images/ArrowCircleLeft";
import Next from "../../../../components/images/ArrowCircleRight";

export default function Picture(props) {
  const router = useRouter();
  const { next, previous, ...rest } = props;
  return (
    <main className="w-full h-screen relative">
      <img className="object-cover w-full h-full" {...rest} />
      <div className="absolute bottom-2 right-2 flex text-yellow-100">
        <span className="mx-1" onClick={router.back}>
          <Close />
        </span>
        <span className="mx-1" onClick={() => router.replace(previous)}>
          <Previous />
        </span>
        <span className="mx-1" onClick={() => router.replace(next)}>
          <Next />
        </span>
      </div>
    </main>
  );
}

export const getStaticPaths = () => ({ paths: pictures, fallback: false });

export const getStaticProps = ({ params }) => ({
  props: { ...picture(params) },
});
