using System.ComponentModel.DataAnnotations;

namespace Repuestos_San_jorge.Models
{
    public class BrandProduct
    {
        public int id { get; set; }

        [Required]
        public int brandId { get; set; }

        [Required]
        public int productId { get; set; }

        public Brand brand { get; set; }

        public Product product { get; set; }

        public BrandProduct()
        {
            brand = new Brand();
            product = new Product();
        }
    }
}
