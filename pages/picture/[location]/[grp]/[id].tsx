import { useRouter } from "next/router";
import { pictures, picture } from "../../../../lib/picture";
import Back from "../../../../components/images/X";

export default function Picture(props) {
  const router = useRouter();
  return (
    <main className="w-full h-screen relative">
      <img className="object-cover w-full h-full" {...props} />
      <div
        className="absolute bottom-2 right-2 text-yellow-100"
        onClick={router.back}
      >
        <Back />
      </div>
    </main>
  );
}

export const getStaticPaths = () => ({ paths: pictures, fallback: false });

export const getStaticProps = ({ params }) => ({
  props: { ...picture(params) },
});
