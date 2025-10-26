import { Button } from '@/components/ui/button'

interface Props{
    title: string; 
    subtitle?: string;
}

export const CustomJumboTron = ({title, subtitle}: Props) => {
    const defaultSubTitle = "Explora nuestra colección de ropa inspirada en el diseño minimalista y la innovación de Tesla.";
  return (
      <section className="py-16 px-4 lg:px-8 bg-muted/30">
        <div className="container mx-auto text-center">
          <h1 className="font-montserrat text-2xl lg:text-5xl font-light tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {subtitle || defaultSubTitle}  
          </p>
        </div>
      </section>
  )
}
