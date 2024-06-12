import Image from "next/image";

export default function Hobby() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-24">
      <div className="container mx-auto px-10 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 my-8">
            <h2 className="text-3xl font-bold sm:text-5xl">Hobby</h2>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1">
            <Image
              alt="生ハムとカマンベール"
              className="object-cover"
              src="/hobby/dsc02145.jpg"
              style={{
                aspectRatio: (2049/1606),
                objectFit: "cover",
              }}
              width={2049}
              height={1606} />
          </div>

          <div className="grid gap-1">
            <Image
              alt="キャラメルシュークリーム"
              className="object-cover"
              src="/hobby/dsc02004.jpg"
              style={{
                aspectRatio: (2049/1606),
                objectFit: "cover",
              }}
              width={2049}
              height={1606} />
          </div>

          <div className="grid gap-1">
            <Image
              alt="おはぎ"
              className="object-cover"
              src="/hobby/dsc01965.jpg"
              style={{
                aspectRatio: (2049/1606),
                objectFit: "cover",
              }}
              width={2049}
              height={1606} />
          </div>

          <div className="grid gap-1">
            <Image
              alt="あんバターサンド"
              className="object-cover"
              src="/hobby/dsc01904.jpg"
              style={{
                aspectRatio: (2049/1606),
                objectFit: "cover",
              }}
              width={2049}
              height={1606} />
          </div>

          <div className="grid gap-1">
            <Image
              alt="吉はし深山桜"
              className="object-cover"
              src="/hobby/dsc01871.jpg"
              style={{
                aspectRatio: (2049/1606),
                objectFit: "cover",
              }}
              width={2049}
              height={1606} />
          </div>

          <div className="grid gap-1">
            <Image
              alt="大納言"
              className="object-cover"
              src="/hobby/dsc01617.jpg"
              style={{
                aspectRatio: (2049/1606),
                objectFit: "cover",
              }}
              width={2049}
              height={1606} />
          </div>
        </div>
      </div>
    </section>
  );
}
