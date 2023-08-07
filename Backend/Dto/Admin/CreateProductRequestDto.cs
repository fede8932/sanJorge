using Repuestos_San_jorge.Models;

namespace Repuestos_San_jorge.Dto.Admin
{
    public class CreateProductRequestDto
    {
        public Product product { get; set; }
        public Price price { get; set; }
    }
}