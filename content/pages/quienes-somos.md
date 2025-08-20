---
title: Quienes somos
slug: /quienes-somos
sections:
  - title:
      text: Misión del AMPA CEIP La Arboleda
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Fortalecer la comunidad educativa con la participación de las familias
    text: >
      Nuestra misión es apoyar a las familias y fortalecer la comunidad educativa. Nos centramos en facilitar la conciliación y el bienestar, organizando servicios y actividades útiles en el día a día. Coordinamos el reparto de libros de texto, ponemos en marcha actividades extraescolares que enriquecen la formación y ofrecemos el aula matinal o “madrugadores” para adaptarnos a distintos horarios. También organizamos eventos que refuerzan la convivencia, como la fiesta de fin de curso o los almuerzos de Navidad. Además, trabajamos por una movilidad escolar segura y saludable, fomentando ir al colegio a pie o en bicicleta y promoviendo campañas de concienciación para crear hábitos saludables y fomentar un entorno respetuoso en toda la comunidad educativa.
    actions:
      - label: Estatutos
        url: https://ampalaarboleda.netlify.app/index-p-42
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Button
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-40
          - pl-4
          - pb-40
          - pr-4
        alignItems: center
        flexDirection: row-reverse
        justifyContent: center
      text:
        textAlign: center
      subtitle:
        textAlign: center
    type: GenericSection
    backgroundImage:
      type: BackgroundImage
      altText: altText of the image
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 100
      url: /images/abstract-background.svg
  - title:
      text: Junta directiva
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    people:
      - content/data/person1.json
      - content/data/person2.json
      - content/data/person3.json
      - content/data/person4.json
    variant: four-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center
    type: FeaturedPeopleSection
  - title:
      text: Comisiones de trabajo
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Equipos voluntarios que impulsan la vida del AMPA
    items:
      - title: Fiestas
        subtitle: Camino, María Ángeles y Begoña.
        text: >-
          Conlleva la organización de todas las fiestas estacionales: Navidad, Semana Santa y Fin de Curso.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: Carnaval
        subtitle: Inma, María, Eva y Cristina.
        text: >-
          Gestiona todos los eventos relacionados con este tema.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: Huerto escolar
        subtitle: Tiziana, Israel, Paula y Lola.
        text: >-
          Se encarga todas las labores del huerto que está en el colegio: remover la tierra, sembrado, recogida.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
        type: FeaturedItem
      - title: Concilia
        subtitle: Ana y Mercedes.
        text: >-
          Gestiona el servicio de madrugadores, hora de 13.00 a 14.00 (sin comedor) y de 15:00 a 16:00 (con comedor) en los meses de junio y septiembre.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
        type: FeaturedItem
      - title: Extraescolares
        subtitle: María Ángeles y María José.
        text: >-
          Se encarga de todo los relacionado con la organización de las actividades extraescolares: elección, horario, ubicación, etc., así como de organizar las escuelas de Navidad, Semana Santa y verano.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
        type: FeaturedItem        
      - title: Libros de texto
        subtitle: Tiziana, Cecilia y María José.
        text: >-
          Se encarga de todo lo relacionado con el servicio de libros que se da a los socios del AMPA al comienzo de curso.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
        type: FeaturedItem        
      - title: Movilidad y entorno escolar seguro
        subtitle: Mara y Rubén.
        text: >-
          Promueve iniciativas como el bicibús semanal y otras actividades de concienciación para promover entornos escolares seguros y saludables donde el peatón y la bicicleta sean protagonistas.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
        type: FeaturedItem                
      - title: Web
        subtitle: Rubén.
        text: >-
          Se encarga de mantener actualizada la página web del AMPA para que familias y colegio estén siempre bien informados y conectados.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
        type: FeaturedItem                
    actions:
      - label: Hazte voluntario
        url: mailto:ampa.laarboleda@gmail.com
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Button
    variant: toggle-list
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pb-40
          - pt-16
          - pl-3
          - pr-3
        justifyContent: center
      subtitle:
        textAlign: center
    type: FeaturedItemsSection
seo:
  metaTitle: Quienes somos - AMPA CEIP La Arboleda
  metaDescription: Conoce la misión, estatutos, junta directiva y comisiones del AMPA CEIP La Arboleda (Santiago y Zaraiche, Murcia), así como los servicios y actividades que apoyan a las familias.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
