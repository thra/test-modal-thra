import './App.scss'
import { useState } from 'react'
import Modal from '../lib'

const App = () => {
    const [modalIsDisplayed, setModalIsDisplayed] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setModalIsDisplayed(true)
    }

    return (
        <section className="container">
            <h1 className="title">Thra Basic Modal React</h1>
            <form onSubmit={handleSubmit}>
                <button>Click me</button>
            </form>
            <Modal
                isDisplayed={modalIsDisplayed}
                onCloseModal={() => setModalIsDisplayed(false)}
                content={
                    <div id="confirmation" className="modal">
                        <p>This is a modal</p>
                        <p>Click on 'X' button to close me</p>
                    </div>
                }
            />
        </section>
    )
}

export default App