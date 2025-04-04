import Hero from './components/Hero.js'
import TicketReservationForm from './components/TicketReservationForm.js'
import EventFooter from './components/EventFooter.js'

export default {
  name: 'App',
  components: {
    Hero,
    TicketReservationForm,
    EventFooter
  },
  template: `
    <div class="min-h-screen flex flex-col">
      <Hero />
      <TicketReservationForm />
      <EventFooter />
    </div>
  `
}