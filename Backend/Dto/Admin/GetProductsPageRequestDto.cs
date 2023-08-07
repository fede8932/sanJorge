using Repuestos_San_jorge.Models;

namespace Repuestos_San_jorge.Dto.Admin
{
    public class GetProductsPageRequestDto
    {
        public IEnumerable<Product> Products { get; set; }
        public int Pages { get; set; }
    }
}
