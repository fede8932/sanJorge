using Microsoft.EntityFrameworkCore;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Data;
using Repuestos_San_jorge.Dto.Admin;
using Repuestos_San_jorge.Dto.Enums;

namespace Repuestos_San_jorge.Services.Admin
{
    public class MovementService : IMovementService
    {
        private readonly OfficeDb _dbContext;

        public MovementService(OfficeDb dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<string> CreateCreditNoteAsync(Movement movement) // crear nota de credito
        {
            try
            {
                var currentAcount = await _dbContext.CurrentAcounts.FirstOrDefaultAsync(
                    currentAcounts => currentAcounts.id == movement.currentAcountId
                );
                if (currentAcount == null)
                {
                    throw new ArgumentNullException(
                        nameof(currentAcount),
                        "El cliente no tiene cuenta corriente puede ser null"
                    );
                }
                movement.currentAcount = currentAcount;
                movement.type = MovementType.NotaCredito;
                movement.fecha = DateTime.UtcNow;
                _dbContext.Movements.Add(movement);
                await _dbContext.SaveChangesAsync();
                return "NT registrada con éxito";
            }
            catch
            {
                throw;
            }
        }
    }

    public interface IMovementService
    {
        Task<string> CreateCreditNoteAsync(Movement movement);
    }
}
