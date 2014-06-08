<div class="message <%= data.isOpponent ? 'opponent' : '' %>"> <!-- opponent or not -->
    <div class="time-wrapper">
        <div class="time">
            <div class="time-icon">
                <svg viewBox="0 0 32 32">
                    <use xlink:href="#icon-clock"></use>
                </svg>    
            </div>
            <div class="time-sent">Today 1:13 PM</div> <!-- time sent -->
        </div>
    </div>
    <div class="avatar"> <!-- user avatar -->
        <svg viewBox="0 0 32 32">
            <use xlink:href="#icon-user"></use>
        </svg>
    </div>
    <div class="message-text-container">
        <div class="message-text"> <!-- some message text -->
            <%= data.message %>
        </div>
    </div>
</div>