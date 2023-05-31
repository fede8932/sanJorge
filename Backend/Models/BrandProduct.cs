using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Repuestos_San_jorge.Models
{
    public class BrandProduct
    {
        [Key]
        public int id { get; set; }

        [Required]
        public int brandId { get; set; }

        [Required]
        public int productId { get; set; }

        [ForeignKey("brandId")]
        public Brand brand { get; set; }

        [ForeignKey("productId")]
        public Product product { get; set; }

        // public BrandProduct()
        // {
        //     brand = new Brand();
        //     product = new Product();
        // }
    }
}
