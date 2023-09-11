using Repuestos_San_jorge.Models;

namespace Repuestos_San_jorge.Dto.Admin
{
    public class SearchClientsDto
    {
        public int totalRows { get; set; }
        public int totalPages { get; set; }
        public IEnumerable<Client> clients { get; set; }
    }
    
}