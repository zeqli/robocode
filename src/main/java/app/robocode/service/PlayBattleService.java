package app.robocode.service;

import java.io.IOException;
import java.util.List;
import java.util.Map;


public interface PlayBattleService {

    List<String> prepareRobots(Map<String, List<String>> robotsMap) throws IOException;
}
