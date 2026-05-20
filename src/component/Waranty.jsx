import { useNavigate } from "react-router-dom";
const Warranty = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Warranty Information</h2>
            <p>On every roofed done by our company, we offer a standard two-year warranty covering installation defects.</p>
            <p>We also provide a 10-year warranty on materials, ensuring that any issues arising from material defects will be addressed promptly.</p>
            <p>Our warranties are designed to give you peace of mind and confidence in the quality of our work. For more details or to make a warranty claim, please contact our customer service team.</p>
            <div className="mt-4">
                <a onClick={() => navigate('/contact')}  className="text-amber-200 hover:text-amber-400 transition-colors font-semibold">Contact Us for Warranty Claims</a>

            </div>
        </div>
    );
};

export default Warranty;