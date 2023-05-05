using System.ComponentModel.DataAnnotations;

namespace Repuestos_San_jorge.Models
{
    public class Stock
    {
        public int id { get; set; }

        [Required]
        public int stock { get; set; }

        public int minStock { get; set; }

        public int productId { get; set; }

        public Product product { get; set; }

        public int brandId { get; set; }

        public Brand brand { get; set; }

        public Stock() {
            product = new Product();
            brand = new Brand();
        }
    }
}
