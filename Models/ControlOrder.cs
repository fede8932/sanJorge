using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Repuestos_San_jorge.Models
{
    public class ControlOrder
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string numRemito { get; set; }

        [Required]
        public string status { get; set; }

        [Required]
        public string resumen { get; set; }

        public int? purchaseOrderId { get; set; }

        [ForeignKey("purchaseOrderId")]
        public PurchaseOrder? purchaseOrder { get; set; }
    }
}
