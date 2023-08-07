using Repuestos_San_jorge.Models;

namespace Repuestos_San_jorge.Dto.Admin
{
    public class CreateClientRequestDto
    {
        public Client Client { get; set; }
        public CustomerDiscountDto[] CustomerDiscounts { get; set; }
    }
}
