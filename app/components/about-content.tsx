interface AboutContentProps {
  content: string[];
}

export function AboutContent({ content }: AboutContentProps) {
  return (
    <>
      {content.map((paragraph, index) => (
        <div key={index}>
          <p className="text-lg">{paragraph}</p>
          <br />
        </div>
      ))}
    </>
  )
} 