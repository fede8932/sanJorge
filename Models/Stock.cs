using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Repuestos_San_jorge.Models
{
    public class Stock
    {
        [Key]
        public int id { get; set; }

        [Required]
        public int stock { get; set; }

        public int minStock { get; set; }

        public int? productId { get; set; }

        [ForeignKey("productId")]
        public Product? product { get; set; }

        public int? brandId { get; set; }

        [ForeignKey("productId")]
        public Brand? brand { get; set; }

        // public Stock() {
        //     product = new Product();
        //     brand = new Brand();
        // }
    }
}
