const mockUrls = [
  "https://utfs.io/f/7759e80d-38fe-4ec0-8fe5-c62ddbdd353a-wmme6s.webp",
  "https://utfs.io/f/7759e80d-38fe-4ec0-8fe5-c62ddbdd353a-wmme6s.webp",
  "https://utfs.io/f/7759e80d-38fe-4ec0-8fe5-c62ddbdd353a-wmme6s.webp",
  "https://utfs.io/f/7759e80d-38fe-4ec0-8fe5-c62ddbdd353a-wmme6s.webp",
  "https://utfs.io/f/7759e80d-38fe-4ec0-8fe5-c62ddbdd353a-wmme6s.webp",
  "https://utfs.io/f/7759e80d-38fe-4ec0-8fe5-c62ddbdd353a-wmme6s.webp",
  // "https://utfs.io/f/7759e80d-38fe-4ec0-8fe5-c62ddbdd353a-wmme6s.webp",
  // "https://utfs.io/f/fdd86ba5-fbb3-49f2-8cbc-9bef4f031754-i56upu.avif",
  // "https://utfs.io/f/6e8f8e9d-26aa-4fca-8b4c-2e55aa7ce187-fq4fcl.webp",
  // "https://utfs.io/f/4db68092-c338-4fde-af79-bb833685ba82-n0emib.webp",
  // "https://utfs.io/f/ac8d2319-917e-4138-8cb6-af7dd17f92a0-cnbka1.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={index + 1} className={"w-48"}>
            <img src={image.url} alt={`Image ${image.id}`} />
          </div>
        ))}
      </div>
      Hello gallery in progress
    </main>
  );
}
