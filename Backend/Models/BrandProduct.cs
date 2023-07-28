using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Repuestos_San_jorge.Models
{
    public class BrandProduct
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }

        [Required]
        public int productId { get; set; }
        public Product product { get; set; }

        [Required]
        public int brandId { get; set; }
        public Brand brand { get; set; }

        [Required]
        public int stockId { get; set; }

        [ForeignKey("stockId")]
        public Stock stock { get; set; }

        [Required]
        public int priceId { get; set; }

        [ForeignKey("priceId")]
        public Price price { get; set; }
    }
}
