using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Repuestos_San_jorge.Models
{
    public class Price
    {
        [Key]
        public int id { get; set; }

        [Required]
        public float price { get; set; }

        [Required]
        public float endPrice { get; set; }

        [Required]
        public float sellPercentage { get; set; }

        [Required]
        public float salePercentage { get; set; }

        public BrandProduct? brandProduct { get; set; }

        public Price()
        {
            endPrice = (float)(price * 1.21);
        }
    }
}
