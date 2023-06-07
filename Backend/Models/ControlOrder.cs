using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Repuestos_San_jorge.Dto.Enums;

namespace Repuestos_San_jorge.Models
{
    public class ControlOrder
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string numRemito { get; set; }

        [Required]
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public ControlOrderStatusType status { get; set; }

        [StringLength(300)]
        public string? resumen { get; set; }
        public int? purchaseOrderId { get; set; }

        [ForeignKey("purchaseOrderId")]
        public PurchaseOrder? purchaseOrder { get; set; }

        public ControlOrder(){
            status = ControlOrderStatusType.NoControlado;
        }
    }
}