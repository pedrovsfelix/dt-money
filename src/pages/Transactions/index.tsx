import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />
                
                <TransactionsTable>
                <tbody>
                    <tr>
                        <td width="50%">Desenvolvimento de site</td>
                        <td>
                            <PriceHighlight variant="income">
                                R$ 2000,00
                            </PriceHighlight>
                        </td>
                        <td>Venda</td>
                        <td>17/11/2025</td>
                    </tr>

                    <tr>
                        <td width="50%">Pizza</td>
                        <td>
                            <PriceHighlight variant="expense">
                                - R$ 59,00
                            </PriceHighlight>
                        </td>
                        <td>Alimentação</td>
                        <td>16/11/2025</td>
                    </tr>
                </tbody>
            </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}