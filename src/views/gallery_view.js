import '../components/navigation.js'
import '../components/contact.js'

const renderGallery = {
  render: async () => {
    return /*html*/ ` 
      <div class="container">
        <aside class="left-aside">
          <side-navigation></side-navigation>
        </aside>

        <main class="main-content">
          <h1> Gallery </h1>
        </main>

        <aside class="right-aside">
          <contact-list></contact-list>
        </aside> 
      </div>
    `
  },
}

export default renderGallery