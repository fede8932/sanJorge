using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Repuestos_San_jorge.Models
{
    public class AjustOrderItem
    {
        [Key]
        public int id { get; set; }

        [Required]
        public int amount { get; set; }

        public float buyPrice { get; set; }

        public int orderAjustId { get; set; }

        [ForeignKey("orderAjustId")]
        public OrderAjust? orderAjust { get; set; }

        public int brandId { get; set; }

        [ForeignKey("brandId")]
        public Brand? brand { get; set; }

        public int productId { get; set; }
        public Product? product { get; set; }
    }
}
