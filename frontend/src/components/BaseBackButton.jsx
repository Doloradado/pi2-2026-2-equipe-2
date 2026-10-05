import { useNavigate } from "react-router-dom"

function BaseBackButton({
    texto = "Voltar para atendimentos",
    rota = "/dashboard",
}) {
    const navigate = useNavigate()

    return (
        <button
            type="button"
            onClick={() => navigate(rota)}
            className="font-inter mb-6 text-[16px] font-semibold text-gray-300 hover:text-white"
        >
            <span>←</span> {texto}
        </button>
    )
}

export default BaseBackButton