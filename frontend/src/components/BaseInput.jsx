/**
 * Componente de campo de entrada reutilizável.
 *
 * @param {Object} props
 * @param {string} props.tipo - Tipo do campo, como "text", "email" ou "password".
 * @param {string} props.placeholder - Texto exibido enquanto o campo está vazio.
 * @param {string} props.value - Valor atual do campo.
 * @param {Function} props.onChange - Função executada quando o valor do campo muda.
 * @param {boolean} props.disabled - Define se o campo ficará desabilitado.
 *
 * Valores padrão:
 * - tipo: "text"
 * - placeholder: ""
 * - value: ""
 * - onChange: função vazia
 * - disabled: false
 */

function BaseInput({
  tipo = "text",
  placeholder = "",
  value = "",
  onChange = () => {},
  disabled = false,
}) {
  return (
    <input
      type={tipo}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="w-72 p-2 rounded-lg bg-white"
    />
  )
}
export default BaseInput