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

        [NotMapped]
        public float endPrice
        {
            get { return (float)(price * 1.21); }
        }

        [Required]
        public float sellPercentage { get; set; }

        [Required]
        public float salePercentage { get; set; }

        public BrandProduct? brandProduct { get; set; }
    }
}
