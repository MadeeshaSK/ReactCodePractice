import { Router } from "react-router-dom";

function App4 {
    return (
        <Router>
            <nav>

            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/posts" element={<Posts />} />
            </Routes>
        </Router>
    )
}