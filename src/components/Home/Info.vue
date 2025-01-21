<template>
  <section class="info">
    <h2>Dlaczego my?</h2>

    <h3>🏨 Wyjątkowy komfort</h3>
    <p>
      Oferujemy eleganckie pokoje zaprojektowane z myślą o Twoim komforcie i
      relaksie.
    </p>

    <h3>🍽 Wyśmienita kuchnia</h3>
    <p>
      Nasza restauracja serwuje dania przygotowywane z najwyższej jakości
      składników.
    </p>

    <h3>🌍 Doskonała lokalizacja</h3>
    <p>
      Znajdujemy się w sercu miasta, blisko głównych atrakcji turystycznych.
    </p>

    <h3>💼 Idealne miejsce na biznes</h3>
    <p>
      Nowoczesne sale konferencyjne i szybki internet dla Twoich spotkań
      biznesowych.
    </p>

    <h3>Gościnność na najwyższym poziomie</h3>
    <p>Dbamy o każdy szczegół, aby Twój pobyt był niezapomniany.</p>
  </section>
</template>

<style lang="scss" scoped>
.info {
  background-color: #f7f7f7;
  padding: 2em;
  display: flex;
  flex-direction: column;
  text-align: center;

  h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1.5em;
  }

  h3 {
    font-size: 1.5rem;
    color: #555;
    margin-bottom: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 1.5em;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 1em;

    h2 {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
}
</style>
