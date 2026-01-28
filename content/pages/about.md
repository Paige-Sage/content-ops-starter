---
title: About Us
slug: /about
sections:
  - type: GenericSection
    title:
      text: About Paige & Sage
      color: text-dark
      type: TitleBlock
    subtitle: Two middle schoolers sharing their adventures with Fitz the cat
    text: >
      Welcome to our corner of the internet! We're two friends who decided to
      create this site to share pictures and stories about our cat Fitz (and his
      sister Biana). What started as a simple idea turned into a fun project
      where we can practice our web development skills and share our love for
      our furry friends.


      We're both in 7th grade at Northwest School and share a passion for music
      and theatre. When we're not posting about cats, you can find us practicing
      our instruments or rehearsing for the next show with Broadway Bound
      Children's Theatre.
    actions: []
    media:
      type: ImageBlock
      url: /images/Fitz1.jpg
      altText: Fitz the cat
      styles:
        self:
          borderRadius: medium
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding:
          - pt-16
          - pl-16
          - pr-16
          - pb-16
  - type: FeaturedPeopleSection
    title:
      text: Meet the Team
      color: text-dark
      type: TitleBlock
    people:
      - content/data/person1.json
      - content/data/person2.json
    variant: two-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pr-16
          - pb-16
        justifyContent: center
      subtitle:
        textAlign: center
seo:
  metaTitle: About Us - Paige & Sage
  metaDescription: >-
    Learn about Paige and Sage, two middle school friends sharing their
    adventures with Fitz the cat and other furry friends.
  socialImage: /images/Fitz1.jpg
  type: Seo
type: PageLayout
---