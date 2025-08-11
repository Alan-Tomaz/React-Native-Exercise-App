import { useLoading } from "@/src/state/LoadingContext";
import { useEffect, useState } from "react"
import { Text, TextProps } from "react-native"

function MotivacionalQuote({...rest}: TextProps) {
const [quote, setQuote] = useState('');

const {startLoading, stopLoading} = useLoading();

  useEffect(() => {
    /* INICIA O LOADING */
    startLoading();
    /* OBTEM FRASE MOTIVACIONAL */
    fetch('https://zenquotes.io/api/random')
      .then((response) => response.json())
      .then((data) => 
        /* TRADUZ O TEXTO */
      fetch(`https://ftapi.pythonanywhere.com/translate?sl=en&dl=pt&text=${encodeURIComponent(data[0].q)}`)
  .then(response => response.json())
  .then(data => setQuote(`"${data['destination-text']}"`))
  .catch((error) => console.log('Erro ao traduzir texto:' + error))
        /* setQuote(data[0].q); */
  )
      .catch((error) => {
        console.error('Erro ao buscar frase:', error);
        
      }) .finally(() => {
        /* FINALIZA O LOADING */
                 stopLoading();
      })
  }, []);
  
  return (
<Text {...rest}>
    {quote}
</Text>
  )
}

export default MotivacionalQuote
